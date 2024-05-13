// wearable-devices.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ActivityLogService } from '../activity-log.service';
// import { DeviceService } from '../device.service';

@Component({
  selector: 'app-wearable-device',
  templateUrl: './wearable-device.component.html',
  styleUrls: ['./wearable-device.component.scss'],
  standalone: true,
  imports: [ 
    CommonModule,
    MatCardModule , 
    MatOptionModule , 
    MatFormFieldModule , 
    MatIconModule , 
    ReactiveFormsModule,
    MatButtonModule,
    MatInput
  ],
})
export class WearableDeviceComponent {
  deviceNameControl = new FormControl('');
  connectedDevice: string | undefined;
  deviceId: string | undefined;

  constructor(private service: ActivityLogService) { }

  addDevice() {
    const userId = 'user123'; // Replace with actual user ID
    const requestBody = {
      name: this.deviceNameControl.value
    };

    this.service.addDevice(requestBody).subscribe(
      (response: any) => {
        this.getDeviceData()
      }
    );
  }
  ngOnInit() {
    try {
      this.getDeviceData()
    }
    catch {
      
    }
  }
  getDeviceData() {
    this.service.getDevice().subscribe(
      (response: any) => {
        this.deviceId = response.data.deviceId;
        this.connectedDevice = response.data.name || "";
      }
    );
  }
  disconnectDevice() {
    this.service.disconnectDevices().subscribe(
      (response: any) => {
        console.log(response)
        this.deviceId = ""
        this.connectedDevice = "";
      }
    )
  }
}
