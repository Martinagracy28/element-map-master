/* eslint-disable no-console */
'use strict';
import * as React from 'react';
import { SessionWallet, allowedWallets } from 'algorand-session-wallet';
import { Dialog, Button, Classes, HTMLSelect } from '@blueprintjs/core';
import { useEffect } from 'react';
import { showErrorToaster } from './Toaster';
export function AlgorandWalletConnector(props) {
    const [selectorOpen, setSelectorOpen] = React.useState(false);
    useEffect(() => { connectWallet(); }, [props.sessionWallet]);
    async function connectWallet() {
        if (props.sessionWallet.connected())
            return;
        await props.sessionWallet.connect();
        props.updateWallet(props.sessionWallet);
    }
    function disconnectWallet() {
        props.sessionWallet.disconnect();
        props.updateWallet(new SessionWallet(props.sessionWallet.network, props.sessionWallet.permissionCallback));
    }
    function handleDisplayWalletSelection() { setSelectorOpen(true); }
    async function handleSelectedWallet(e) {
        const choice = e.currentTarget.id;
        if (!(choice in allowedWallets)) {
            props.sessionWallet.disconnect();
            return setSelectorOpen(false);
        }
        const sw = new SessionWallet(props.sessionWallet.network, props.sessionWallet.permissionCallback, choice);
        if (!await sw.connect()) {
            sw.disconnect();
            showErrorToaster("Couldn't connect to wallet");
        }
        props.updateWallet(sw);
        setSelectorOpen(false);
    }
    function handleChangeAccount(e) {
        props.sessionWallet.setAccountIndex(parseInt(e.target.value));
        props.updateWallet(props.sessionWallet);
    }
    const walletOptions = [];
    for (const [k, v] of Object.entries(allowedWallets)) {
        walletOptions.push((React.createElement("li", { key: k },
            React.createElement(Button, { id: k, large: true, fill: true, minimal: true, outlined: true, onClick: handleSelectedWallet },
                React.createElement("div", { className: 'wallet-option' },
                    React.createElement("img", { className: 'wallet-branding', src: v.img(props.darkMode) }),
                    React.createElement("h5", null, v.displayName()))))));
    }
    if (!props.connected)
        return (React.createElement("div", null,
            React.createElement(Button, { minimal: true, rightIcon: 'selection', intent: 'warning', outlined: true, onClick: handleDisplayWalletSelection }, "Connect Wallet"),
            React.createElement(Dialog, { isOpen: selectorOpen, title: 'Select Wallet', onClose: handleSelectedWallet },
                React.createElement("div", { className: Classes.DIALOG_BODY },
                    React.createElement("ul", { className: 'wallet-option-list' }, walletOptions)))));
    const addr_list = props.accts.map((addr, idx) => {
        return (React.createElement("option", { value: idx, key: idx },
            " ",
            addr.substr(0, 8),
            "...  "));
    });
    const iconprops = {
        icon: 'symbol-circle',
        intent: 'success'
    };
    return (React.createElement("div", null,
        React.createElement(HTMLSelect, { onChange: handleChangeAccount, minimal: true, iconProps: iconprops, defaultValue: props.sessionWallet.accountIndex() }, addr_list),
        React.createElement(Button, { icon: 'log-out', minimal: true, onClick: disconnectWallet })));
}