import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './contacts.module.scss'
import template from './contacts.template.html'

export class Contacts extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
