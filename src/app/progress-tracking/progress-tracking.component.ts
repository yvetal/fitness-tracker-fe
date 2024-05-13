import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import * as d3 from 'd3';


@Component({
  selector: 'app-progress-tracking',
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['progress-tracking.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ]
})
export class ProgressTrackingComponent implements OnInit {
  @Input() progressData: any; // Input property to receive progress tracking data
  @ViewChild('chart', { static: true }) private chartContainer: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    // const data = [
    //   { x: 0, y: 10 },
    //   { x: 1, y: 20 },
    //   { x: 2, y: 15 },
    //   { x: 3, y: 25 },
    //   { x: 4, y: 18 },
    //   { x: 5, y: 22 },
    //   { x: 6, y: 18 },
    //   { x: 7, y: 30 },
    //   { x: 8, y: 25 },
    //   { x: 9, y: 28 },
    //   { x: 10, y: 20 }
    // ];

    const data = [];

    for (let x = 0; x <= 100; x++) {
      let yStart = Math.floor(x / 10) * 10 + 10; // Calculate the start of y range based on x
      const y = Math.floor(Math.random() * (yStart + 10 - yStart)) + yStart; // Generate y within the range
      data.push({ x, y });
  }

      console.log(data)
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 1280 - margin.left - margin.right;
      const height = 540 - margin.top - margin.bottom;

      const xextent = d3.extent(data, (d) => d.x);
      const x = d3.scaleLinear()
        .domain([xextent[0] ?? 0, xextent[1] ?? 0])
        .range([0, width]);

      const yextent = d3.extent(data, (d) => d.y);
      const y = d3.scaleLinear()
        .domain([yextent[0] ?? 0, yextent[1] ?? 0])
        .range([height, 0]);

      const line = d3.line<{ x: number, y: number }>()
        .x(d => x(d.x))
        .y(d => y(d.y));

      const svg = d3.select(this.chartContainer?.nativeElement)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // X-axis label
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', height) // Adjust this value to position the label
        .attr('text-anchor', 'middle')
        .text('Days');

      // Y-axis label
      svg.append('text')
        .attr('x', -height / 2)
        .attr('y', 60) // Adjust this value to position the label
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .text('Calories Burned');

      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 3) // Increase the stroke width
        .attr('d', line(data));
    }

  }
