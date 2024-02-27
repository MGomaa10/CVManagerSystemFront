import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { HttpService } from 'src/@shared/services';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NavBarServicesService {
  hubConnectionBuilder = new HubConnectionBuilder().withUrl(environment.basiUrl+"/refresh",
  {  skipNegotiation: true,
  transport: signalR.HttpTransportType.WebSockets
   }).build();

  constructor(private http: HttpService) { }
}
