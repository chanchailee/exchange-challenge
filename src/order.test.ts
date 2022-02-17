import { Order } from './order';

describe('order', () => {
	describe('create', () => {
		describe('valid params', () => {
			test('should be defined', () => {
				const actual = Order.create(1);
				expect(actual).toBeDefined();
			});
		});
	});
});
