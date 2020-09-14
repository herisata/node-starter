# Main patterns used on the app

## I -3 layers architecture

    UI => Controllers `[express]` => Services => Repositories `[typeorm]` => Database

- `Controllers`: as the API entrypoints. Take care to not put business logic in here nor to skip directly to the `repository` layer.  
  But you can put mapping logics and HTTP response handling.
- `Services`: All business logic should be put here. Controllers should call the services methods. And services should call each others. Services handles data manipulation using the methods from `repository` layer
- `Repositories`: Layer that manages all database access and edit, either by using `typeorm`'s default repository (using the abstract factory pattern: `getRepository(EntityA)`) or by defining custom repositories which extends `typeorm`'s.

## II - Loader pattern

Pretty self explanatory and simple: put everything that loads something at the app startup together. Keep the main index.ts clean.

## III - Inversion Of Control (IoC)

> IoC is all about inverting the control. To explain this in layman's terms, suppose you drive a car to your work place. This means you control the car. The IoC principle suggests to invert the control, meaning that instead of driving the car yourself, you hire a cab, where another person will drive the car. Thus, this is called inversion of the control - from you to the cab driver. You don't have to drive a car yourself and you can let the driver do the driving so that you can focus on your main work.

> The IoC principle helps in designing loosely coupled classes which make them testable, maintainable and extensible.

see [here](https://www.tutorialsteacher.com/ioc/inversion-of-control)

What is mainly used here is the dependency injection.

- repositories are injected in services
- services are injected in controllers

for testing purposes, it becomes easier to inject mock repositories/services.

### 1. How does it work

See [the doc](https://github.com/inversify/InversifyJS/tree/master/wiki)  
Here is an [example](https://github.com/inversify/inversify-basic-example)

### 2. How does it work for us

The inversify container is defined in `/loaders/inversify`

The `controllers` are using inverisify, so for them to `magically` work, we need to import each controllers once in the file:

```typescript
import 'controllers/HealthController';
import 'controllers/IndexController';
```

then, we bind a `injectable` class (with an unique identifier from `/constants/types`) to it's desired implementation:

```typescript
// here using a dynamic value (from typeorm's abstract repository factory)
bind < Repository < PublicProfiles >> TYPES.PublicProfileRepository.toDynamicValue(() => getRepository(PublicProfiles));

// here using a fixed implementation
bind < ProfileService > TYPES.ProfileService.to(ProfileServiceImpl);
```

finally, we can inject it where it's needed

```typescript
@controller('/')
export class IndexController implements interfaces.Controller {
  private readonly _profileService: ProfileService;

  public constructor(@inject(TYPES.ProfileService) profileService: ProfileService) {
    this._profileService = profileService;
  }
  // ...
}
```

## IV - Data Mapper vs Active Record

Those are two ways of doing database interactions (CRUD).
Neither of them are better than the other.

For our usage, `typeorm` allow us to use both, at the same time.  
But for clarity and simplicity, it may be better to go with the Data Mapper pattern (which involves the `repository` layer).

See [the typeorm doc](https://orkhan.gitbook.io/typeorm/docs/active-record-data-mappe) for details
