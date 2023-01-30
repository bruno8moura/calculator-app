import { expect } from 'chai'
import { sum } from '@/sample'

describe('test', () => {
	it('somar dois números', () => {
		const result = sum(1, 1)
		expect(result).to.be.equal(2)
	})
})
