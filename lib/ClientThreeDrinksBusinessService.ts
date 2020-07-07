import { Drink } from 'drinks-company-models-contracts';
import { DrinksBusinessService } from 'drinks-company-business-services';

export default class ClientThreeDrinksBusinessService extends DrinksBusinessService {
	crazyFunction() : Promise<Drink[]> {
		return new Promise(async (resolve: Function) => {
			const drinks = await this.drinksDataRepository.getDrinks();
			const result = drinks.map((drink: Drink) => ({
				name: `Hi, Gorilla! This is some custom crazy logic for "${this.clientName}" over drink "${drink.name}"`,
			}));
			resolve(result);
		});
	}
}