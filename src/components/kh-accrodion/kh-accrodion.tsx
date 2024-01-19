import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
	tag: 'kh-accrodion',
	styleUrl: 'kh-accrodion.scss',
	shadow: true,
})

export class KhAccrodion {

	@Prop() buttonTitle: string;
	@Prop() panelText: string;

	@State() isOpen = false;

	private togglePanel = () => {
		this.isOpen = !this.isOpen;
	}

	render() {
		return (
			<Host>
				<div class={`accordion ${this.isOpen ? 'accordion--open' : ''}`}>

					<button class="accordion__button" onClick={this.togglePanel}>
						<h2 class="accordion__button-text">{this.buttonTitle}</h2>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
							<path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
						</svg>
					</button>

					<div class="accordion__panel">
						<p class="accordion__panel-text">
							{this.panelText}
						</p>
					</div>

				</div>
			</Host>
		);
	}

}
