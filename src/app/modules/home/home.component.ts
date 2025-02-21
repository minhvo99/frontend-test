import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
    isLoading = false;
    icons = ['Mountains-3', 'Fishing', 'Crosshair-3'];
    featureIcon = ['auth', 'respect', 'earth', 'personal', 'smile'];
    imgSection1 = ['img1', 'img2', 'img3'];
    imgSection2 = ['img4', 'img5', 'img6', 'img7'];
    disabledDates = [new Date(2025, 1, 28), new Date(2025, 1, 29), new Date(2024, 4, 2)];
    private map: any;
    private locations = [
        {
            name: 'Pourvoirie 1',
            activities: 'Fishing, Hunting',
            coords: [51.5, -0.09],
            icon: 'Mountain-2',
        },
        {
            name: 'Pourvoirie 2',
            activities: 'Camping, Canoeing',
            coords: [51.51, -0.1],
            icon: 'Fishing icon-2-32px',
        },
        {
            name: 'Pourvoirie 3',
            activities: 'Hiking, Wildlife Watching',
            coords: [51.49, -0.08],
            icon: 'Crosshair-2',
        },
    ];
    date: Date[] | undefined;
    formMessage!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formMessage = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required],
        });
    }

    reset(): void {
        this.formMessage.reset();
    }

    getError(formControlName: string) {
        return (
            this.formMessage.get(formControlName)?.dirty &&
            this.formMessage.get(formControlName)?.hasError('required')
        );
    }

    ngAfterViewInit(): void {
        this.initMap();
        this.onAddMarker();
    }

    initMap(): void {
        this.map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
    }

    onAddMarker () {
        const fishIcon = L.icon({
            iconUrl: 'assets/images/mapFish.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64], 
            iconAnchor:   [22, 94], 
            shadowAnchor: [4, 62], 
            popupAnchor:  [-3, -76] 
        });
        const mountainsIcon = L.icon({
          iconUrl: 'assets/images/mapMountains.png',
          iconSize:     [38, 95],
          shadowSize:   [50, 64], 
          iconAnchor:   [22, 94], 
          shadowAnchor: [4, 62], 
          popupAnchor:  [-3, -76] 
      });
        const corssHandsIcon = L.icon({
          iconUrl: 'assets/images/mapCorsshands.png',
          iconSize:     [38, 95],
          shadowSize:   [50, 64], 
          iconAnchor:   [22, 94], 
          shadowAnchor: [4, 62], 
          popupAnchor:  [-3, -76] 
      });
      L.marker([51.5, -0.09], {icon: fishIcon}).addTo(this.map)
      .bindPopup('Ethical Hunting.')
      .openPopup();
      L.marker([51.51, -0.1], {icon: mountainsIcon}).addTo(this.map)
      .bindPopup('Online Classes.')
      .openPopup();
      L.marker([51.49, -0.08], {icon: corssHandsIcon}).addTo(this.map)
      .bindPopup('Gastronomic Experiences.')
      .openPopup();
    }

    onUpload(event: any) {}
}
