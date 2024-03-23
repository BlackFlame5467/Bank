import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './actions.module.scss'
import template from './actions.template.html'

export class Actions extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
