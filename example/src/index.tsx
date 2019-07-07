import React, { useState, useEffect, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Skeleton from '../../src/index'
import { MENUS, ANSWER } from './CONTANTS'
import '../../src/index.css'

interface ListType {
	name: string
	id: string
	img: string
}

interface answerType {
	name?: string
	content?: string
	avatar?: string
	des?: string
}
const App: React.FunctionComponent<any> = () => {
	const [menuList, setList] = useState<ListType[]>([])
	const [answer, setAnswer] = useState<answerType>({})

	useEffect(() => {
		setTimeout(() => {
			setList(MENUS)
		}, 2000)

		setTimeout(() => {
			setAnswer(ANSWER)
		}, 3000)
	})

	return (
		<div className="container">
			<h1 className="menu-title">猜你喜欢</h1>
			<section className="list-container">
				{menuList.length
					? menuList.map(menu => (
							<section key={menu.id}>
								<img src={menu.img} alt="" className="list-item-img" />
								<p className="list-item-name">{menu.name}</p>
							</section>
						))
					: Array.from({ length: 5 }).map(() => (
							<section>
								<Skeleton type="circle" className="list-item-img" />
								<Skeleton className="list-item-name" />
							</section>
						))}
			</section>
			<h1 className="menu-title">推荐回答</h1>
			<section className="answer-container">
				{answer.content ? (
					<Fragment>
						<section className="user-container">
							<img className="user-avatar" src={answer.avatar} />
							<section className="user-info-container">
								<p className="user-name">{answer.name}</p>
								<p className="user-des">{answer.des}</p>
							</section>
						</section>
						<section className="answer-content">{answer.content}</section>
					</Fragment>
				) : (
					<Fragment>
						<section className="user-container">
							<Skeleton className="user-avatar" />
							<section className="user-info-container">
								<Skeleton className="user-name" height="1rem" width="4rem" />
								<Skeleton className="user-des" height="1rem" width="8rem" />
							</section>
						</section>
						<section className="answer-content">
							<Skeleton height="1rem" width="100%" />
							<Skeleton height="1rem" width="100%" />
							<Skeleton height="1rem" width="30%" />
						</section>
					</Fragment>
				)}
			</section>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
