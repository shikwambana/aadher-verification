import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-statusService
import { statusService } from '../services/status/status.service';
//CORE_REFERENCE_IMPORT-saveService
import { saveService } from '../services/save/save.service';
//CORE_REFERENCE_IMPORT-adminComponent
import { adminComponent } from '../components/adminComponent/admin.component';
//CORE_REFERENCE_IMPORT-reviewComponent
import { reviewComponent } from '../components/reviewComponent/review.component';
//CORE_REFERENCE_IMPORT-scanComponent
import { scanComponent } from '../components/scanComponent/scan.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminComponent
adminComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reviewComponent
reviewComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-scanComponent
scanComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-statusService
statusService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-saveService
saveService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: 'scan', component: scanComponent},{path: 'review', component: reviewComponent},{path: 'admin', component: adminComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: '', redirectTo: '/home/scan', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
