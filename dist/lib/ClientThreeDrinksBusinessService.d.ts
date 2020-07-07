import { Drink } from 'drinks-company-models-contracts';
import { DrinksBusinessService } from 'drinks-company-business-services';
export default class ClientThreeDrinksBusinessService extends DrinksBusinessService {
    crazyFunction(): Promise<Drink[]>;
}
