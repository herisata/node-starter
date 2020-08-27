import { Container } from 'inversify';
// import { interfaces, TYPE } from 'inversify-express-utils';

// import TYPES from 'constants/types';
// import { ExampleRepository } from 'repositories/ExampleRepository';

// !IMPORTANT: import each controller once in order to enable Inversion of Control
import 'controllers/HealthController';
import 'controllers/IndexController';

const container = new Container();

// container.bind<ExampleRepository>(TYPES.ExampleRepository).to(ExampleRepository).inSingletonScope();
export default container;
