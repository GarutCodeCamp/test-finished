/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react'
import Navigation from '../components/bottomnNav'
import Navbar from '../components/nav'
import {
  BsArrowLeftShort, BsThreeDotsVertical
} from 'react-icons/bs';
import Content from '../components/content';
import HeaderContent from '../components/header';

export default function Home() {
  return (
    <div className="testTinggi">
      <Navbar position="fixed-top" >
        <a className="navbar-brand" href="">
          <BsArrowLeftShort />
        </a>
        <a className="navbar-brand me-auto">Home</a>
        <a className="navbar-brand"><BsThreeDotsVertical /></a>
      </Navbar>
      <HeaderContent />
      <Content >
        <div className="h3"> 1. Masters in Management are internationally oriented</div>
        <div className="p mt-3">

          In the past years, MIM degrees have been rising in popularity in Europe, but also in Asia, Australia, and Canada. 85% of all worldwide Masters in Management are offered in Europe, especially thanks to the changes brought by the implementation of the Bologna process.

          The rising popularity is also supported by the fact that most MIM degrees are designed for an international student audience, with courses offered in English. Some of the main subjects discussed during classes are management theory, organisational behaviour, and other aspects of the business world.

          Here are a few popular countries where you can follow an English-taught Master's in Management programme
        </div>
      </Content>
      <Navigation />
    </div>
  )
}
