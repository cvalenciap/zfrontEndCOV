import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export class AppPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        const loadRoute = (delay: boolean) => delay
            ? timer(150).pipe(mergeMap(_ => load()))
            : load();
        return route.data && route.data.preload
            ? loadRoute(route.data.delay)
            : of(null);
    }

}
