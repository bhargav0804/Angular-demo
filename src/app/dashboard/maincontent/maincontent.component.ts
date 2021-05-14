import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor() { }
  info=[
    {name:'Ted James',Place:'Phoenix',Country:'Arizona',Gender:'Male'},
    {name:'Michelle Thompson',Place:'Encinitas,',Country:'California',Gender:'Female'},
    {name:'Zed Bishop',Place:'Seattle,',Country:'Washington',Gender:'Male'},
    {name:'Tina Adams',Place:'Chandler',Country:'Arizona',Gender:'Female'},
    {name:'Igor Minar',Place:'Dailas,',Country:'Texas',Gender:'Male'},
    {name:'Brad Green',Place:'Orlando,',Country:'Florida',Gender:'Male'},
    {name:'Misko Hevery',Place:'CareyNorth',Country:'Carolina',Gender:'Male'},
    {name:'Heddy Wahlin',Place:'Anaheim,',Country:'California',Gender:'Female'},
    {name:'John Papa',Place:'Orlando,',Country:'Florida',Gender:'Male'}
 
 ]

  ngOnInit(): void {
  }

}
