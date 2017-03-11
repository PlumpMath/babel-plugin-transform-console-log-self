'use strict'

const methodName = 'log'

module.exports = ({ types: t }) => ({
	visitor: {
		CallExpression (path, state) {
			const { type, object, property } = path.node.callee

			if (
				type !== 'MemberExpression' ||
				object.type !== 'Identifier' ||
				object.name !== 'console' ||
				property.type !== 'Identifier' ||
				property.name !== methodName
			) {
				return
			}

			path.node.arguments = [].concat(
				...path.node.arguments.map((arg) => {
					if (arg.type === 'StringLiteral') {
						return [arg]
					} else {
						const source = this.file.code.substring(arg.start, arg.end)

						return [
							t.stringLiteral(source),
							arg
						]
					}
				})
			)
		}
	}
})