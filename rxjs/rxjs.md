# Rx.js

https://rxjs-dev.firebaseapp.com/guide/observable

https://poiemaweb.com/angular-rxjs

https://junwoo45.gitbook.io/learn-rxjs-korean/learn-rxjs/concepts/rxjs-primer

**파트**

1. Observable (감시 할 수 있는 것) 과 Subscription (구독) 의 관계에 얽히는 부분 (Observable / Subscription / Subscriber 등) → 핵심기능
2. pipe() 로 들어가게 되는 여러가지 Utility Function들 → 편리를 위한 기능

1번 위주에 초점을 맞추기

**리액티브(반응형) 프로그래밍**

데이터 스트림에 기반을 둔 프로그래밍 패러다임

**데이터 스트림** 연속적인 데이터 흐름

다양한 데이터를 데이터 스트림 형식으로 만들고 → 이 데이터 스트림을 구독(subscribe) 하여 스트림의 상태 변화에 반응하는 방식이다.

**풀 시나리오(Pull-scenario)**

애플리케이션이 외부 환경에서 데이터를 당겨오는 방식

**푸시 시나리오(Push-scenario)**

외부 환경이 애플리케이션에 데이터를 밀어넣는 방식

**옵저버블(Observable)**

데이터 스트림(외부 환경에서 애플리케이션 내부로 연속적으로 흐르는 데이터)을 생성하고 방출하는 객체 동기/비동기와 관계없이 데이터를 생산하는 것이라면 무엇이든 옵저버블로 만들 수 있다.

**노티피케이션(Notification)**

옵저버블이 방출할 수 있는 푸시 기반 이벤트 또는 값

**옵저버**

노티피케이션을 획득하여 사용하는 객체

**구독(subscription)**

데이터 소비자(Data consumer) 옵저버는 데이터 상생자(Data producer) 옵저버블을 구독(subscription) 옵저버는 옵저버블에 연결되어 옵저버블의 상태를 관찰 옵저버블이 방출한 노티피케이션은 옵저버에게 자동으로 전파 구현의 관점에서 구독이란 옵저버블의 subscribe 오퍼레이터를 호출할 때 인자로 옵저버를 전달하는 것을 말한다.

**Promise의 단점**

- 한 번에 하나의 데이터를 처리하기 때문에 연속성을 갖는 데이터를 처리할 수 없다.
- 서버로 보낸 요청은 취소할 수 없다.

❄️**Cold observable**

옵저버블은 구독(subscribe)되기 전까지 동작하지 않는다.

```
import { Observable } from 'rxjs';

export interface CornerstoneImage {
  /** cornerstoneImage.image.subscribe() 로 cornerstone.Image를 받을 수 있다 */
  readonly image: Observable<cornerstone.Image | null>;
  /** cornerstoneImage.progress.subscribe() 로 로딩 상태를 0 ~ 1의 값으로 얻을 수 있다 */
  readonly progress: Observable<number>;
  /** cornerstoneImage.destroy() 로 현재 Image를 Cache에서 삭제한다 */
  destroy: () => void;
}
```

image와 progress는 데이터 스트림(외부 환경에서 애플리케이션 내부로 연속적으로 흐르는 데이터)을 생성하고 방출하는 객체인 옵저버블이 된거네

```
image.progress.subscribe((progress: number) => console.log(progress));
```

subscribe를 하면서! 옵저버는 옵저버블에 연결되어 옵저버블의 상태를 관찰할 수 있게되었고(얼음..땡..) 계속 callback에 넘어오는 인자에 대해 의문이였는데 `progress: Observable;` 여기에서 정의된 number라는 거나보다. 신기해🤭

```
get image(): Observable<cornerstone.Image | null> {
  return this._imageSubject.asObservable();
}
```

보다보다 보면 이런것도 볼 수 있다..

https://stackoverflow.com/questions/36986548/when-to-use-asobservable-in-rxjs