import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormValidationModule } from './form-validation.module';

platformBrowserDynamic().bootstrapModule(FormValidationModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
