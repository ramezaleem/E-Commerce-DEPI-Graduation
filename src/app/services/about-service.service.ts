import { Injectable } from '@angular/core';
import { IaboutMainServ } from '../interfaces/interface-about-main';
import { IaboutMidServ } from '../interfaces/interface-about-mid';
import { IaboutFootServ } from '../interfaces/interface-about-foot';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  constructor() { }
  aboutMainServ:IaboutMainServ[]=[
    {
      img:'/assets/images/Services (3).png',
      count: 10.5  ,
      title:'Sallers active our site'
    },
    {
      img:'/assets/images/Services (2).png',
      count: 33 ,
      title:'Mopnthly Produduct Sale'
    },
    {
      img:'/assets/images/Services (1).png',
      count: 45.5 ,
      title:'Customer active in our site'
    },
    {
      img:'/assets/images/Services.png',
      count: 25 ,
      title:'Anual gross sale in our site'
    },
  ];
  aboutMidServ:IaboutMidServ[]=[
    {
      img: '/assets/images/person.png',
      name : 'Will Smith',
      jobTitle:'Product Designer'
    },
    {
      img: '/assets/images/person1.png',
      name : 'Emma Watson',
      jobTitle:'Managing Director'
    },
    {
      img: '/assets/images/person2.png',
      name : 'Tom Cruise',
      jobTitle:'Founder & Chairman'
    },
  ]
  aboutFootServ:IaboutFootServ[]=[
    {
      img: '/assets/images/Services (4).png',
      title : 'FREE AND FAST DELIVERY',
      description:'Free delivery for all orders over $140'
    },
    {
      img: '/assets/images/Services (5).png',
      title : '24/7 CUSTOMER SERVICE',
      description:'Friendly 24/7 customer support'
    },
    {
      img: '/assets/images/Services (6).png',
      title : 'MONEY BACK GUARANTEE',
      description:'We reurn money within 30 days'
    },

  ]
}
