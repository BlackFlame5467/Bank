import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './transfer-field.module.scss'
import template from './transfer-field.template.html'

export class TransferField extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
