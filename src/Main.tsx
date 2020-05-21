import React, { Component, CSSProperties } from "react";
import { ConversationDto } from "./chat";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { proxy } from "./Proxy";

export class Main extends Component {
    state = { selectedConversation: undefined as (ConversationDto | undefined) };
    render() {
        const longStyle:CSSProperties={height:'100%'}

        let className = "main row" + (this.state.selectedConversation ? "right" : "left");
        return (
            <div className={className} style={longStyle}>
                <LeftPane
                    inbox={proxy.inbox!}
                    selectedConversation={this.state.selectedConversation}
                    onSelect={c => this.setState({ selectedConversation: c })} />
                <RightPane conversation={this.state.selectedConversation}
                    onBack={() => this.setState({ selectedConversation: undefined })} />
            </div>
        );
    }
}