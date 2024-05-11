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
  deviceId: number | undefined;

  // constructor(private deviceService: DeviceService) { }

  addDevice() {
    const userId = 'user123'; // Replace with actual user ID
    const requestBody = {
      deviceName: this.deviceNameControl.value
    };

    // this.deviceService.addDevice(userId, requestBody).subscribe(
    //   (response: any) => {
    //     this.deviceId = response.deviceId;
    //     this.connectedDevice = this.deviceNameControl.value;
    //   },
    //   (error: any) => {
    //     console.error("Error adding device:", error);
    //     // Handle error accordingly
    //   }
    // );
  }

  getDeviceData() {
    // const userId = 'user123'; // Replace with actual user ID

    // this.deviceService.getDeviceData(userId).subscribe(
    //   (response: any) => {
    //     // Handle device data response accordingly
    //   },
    //   (error: any) => {
    //     console.error("Error getting device data:", error);
    //     // Handle error accordingly
    //   }
    // );
  }
  disconnectDevice() {
    
  }
}
