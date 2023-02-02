import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HotelsService } from './hotels.service';

describe('HotelsService testing', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let hotelsService: HotelsService;
  const rootObject = {
    items: [
      {
        title: 'string',
        address: {
          label:
            'volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis.',
          contryCode:
            'sed dictum eleifend, nunc risus varius orci, in consequat enim',
          countryName:
            'tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec',
          stateCode: '',
          state:
            'quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod',
          countyCode:
            'tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',
          county:
            'egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta',
          city: 'ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam',
          district:
            'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In',
          street:
            'ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel',
          postalCode:
            'fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,',
          houseNumber:
            'arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.',
        },
        position: {
          lat: 1,
          lng: 2,
        },
        distance: 1,
        icon: 'string',
      },
      {
        title: 'string',
        address: {
          label:
            'volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis.',
          contryCode:
            'sed dictum eleifend, nunc risus varius orci, in consequat enim',
          countryName:
            'tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec',
          stateCode: '',
          state:
            'quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod',
          countyCode:
            'tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',
          county:
            'egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta',
          city: 'ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam',
          district:
            'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In',
          street:
            'ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel',
          postalCode:
            'fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,',
          houseNumber:
            'arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.',
        },
        position: {
          lat: 1,
          lng: 2,
        },
        distance: 1,
        icon: 'string',
      },
      {
        title: 'string',
        address: {
          label:
            'volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis.',
          contryCode:
            'sed dictum eleifend, nunc risus varius orci, in consequat enim',
          countryName:
            'tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec',
          stateCode: '',
          state:
            'quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod',
          countyCode:
            'tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu',
          county:
            'egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta',
          city: 'ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam',
          district:
            'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In',
          street:
            'ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel',
          postalCode:
            'fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,',
          houseNumber:
            'arcu et pede. Nunc sed orci lobortis augue scelerisque mollis.',
        },
        position: {
          lat: 1,
          lng: 2,
        },
        distance: 1,
        icon: 'string',
      },
    ],
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    hotelsService = new HotelsService(httpClientSpy);
    hotelsService.selectedHotel = new Observable();
  });

  it('load hotels should be called once (HttpClient called once)', (done: DoneFn) => {
    let expectedHotels = of(rootObject);

    httpClientSpy.get.and.returnValue(expectedHotels);

    hotelsService.loadHotels();

    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    done();
  });
});
