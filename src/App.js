import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
// function Someone() {
//   const everyone = ['John', 'See', 'Na'];
//   var anyone = everyone[Math.floor(Math.random() * everyone.length)];
//   return anyone;
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "เพลงสำหรับคุณ",
      mpic: null,
      age: 20
    }
  }
  changesong = () => {
    const musiclist = [ 'อยากให้เธอลองรัก เหมือนครั้งแรกที่เธอได้พบรัก','ไม่เคยมีดวงกับความรักซะเลย รักใครทีไรเขาก็ทำเฉยๆ','ขอซักคนที่มีหัวใจอยู่ในนั้น มีหัวใจตรงกับฉัน มาเอาความรักฉันไป',
    'คนที่ทำร้ายหัวใจให้แหลกสลายจนไม่มีคำว่าชิ้นดี','ท่ามกลางพายุฝนที่โหมกระหน่ำ ท่ามกลางคำว่าเราที่เป็นอดีตไป', 'เธอเป็นแฟนฉันแล้ว รู้ตัวบ้างไหม แล้วเมื่อไรหนอฉันจะได้เป็นแฟนของเธอ','เนื้อคู่ฉันยังไม่เกิดสักที และดูเหมือนยังไม่มีวี่แววจะพบเจอ',
    'ให้ฉันได้ดูแลเธอได้ไหม นอนหลับได้ไหม นอนตักฉันไหม','ฉันไม่ต้องการใครอีก ดวงดาวทั้งฟ้าต้องเสียใจและ ไม่มีสิ่งไหนสวยงามต่อไป ตราบที่โลกนี้มีคนอย่างเธอ','เธอชอบฉันตรงไหน ให้เอาปากกามาวง','แค่ไม่มีใครให้คิดถึง ไม่มีใครให้ตามง้อ แค่ไม่มีใครให้นั่งรอ ไม่มีใครให้กวนใจ',
    'เพราะเขายังคงเก็บไว้ เหมือนเธอไม่เคยไปไหน แผลเป็นมันยังไม่หาย','ขนาดก้อนหินยังแหลกเป็นเม็ดทราย นับประสาอะไรกับหัวใจ','เมื่อไหร่จะมีใคร ใครซักคนที่เคียงข้างเรา','แม้ว่าเธอนั้นไม่รู้จักฉันสักหน่อย แต่ฉันก็แอบชอบเธอไม่ใช่น้อย','แอบบอกรักเธอทุกวัน ได้ยินฉันบ้างไหมเธอ',
    'อยู่อย่างนี้ก็ดีอยู่แล้วก็เพียงพอแล้วไม่เคยต้องการอะไร','เมื่อดวงใจมีรัก ดั่งเจ้านกโผบิน บินไปไกลแสนไกล','ไม่อยากจะขอให้เวลานี้เป็นของเรา ไม่อยากจะถามว่าเราจะเหมือนเดิมได้ไหม','ฉันเหมือนคนโชคร้ายที่โดนสาปไว้ ให้พบแต่ผิดหวัง','แค่เพียงได้เห็นคุณยิ้มทีไรก็หวั่นไหวทุกที ใจไม่ค่อยดีก็คุณน่ารักไป',
    'ฉันมายินดีให้กับรักที่สดใส ยินดีที่เธอได้พบเจอ','อยากมีคนพิเศษ อยู่ในคืนพิเศษ คืนสำคัญอีกคืน ที่ต้องอยู่อย่างเหงาใจ','อยากบอกให้คุณนั้นได้เข้าใจ ว่าทั้งดวงใจผมมีเเค่คุณ','ถ้าเราได้เจอกันอีกซักครั้งอยากถาม เธอจำฉันได้อยู่รึเปล่า','หากว่าในวันนี้เรายังอยู่ด้วยกัน ไม่รู้ว่าใจฉันจะมีความสุขมากขนาดไหน','จะกอดเธอไปจนเช้า แสงดาวกระทบที่ข้างฉัน',
    'ให้ท้องฟ้าช่วยดูแลเธอให้ดี และเรื่องไหนให้เธอเหนื่อยใจไม่มี','แอบหลงรักเธออยู่แต่เธอคงดูไม่ออก ซ่อนความรักไม่กล้าบอก กลัวเธอจะเปลี่ยนไป','พูดไม่ค่อยเก่งแต่รักหมดใจ ถ้ารู้ว่าชอบอะไรจะหาให้เธอ','ภาวะโลก la la la la love you มันช่างสดใส na na na น่าดู',
    'ก็โสดโสด อยู่ทางนี้ยังโสดโสด อยากเอารักมาโหลดโหลด','เหมือนฝนตกตอนหน้าแล้ง เหมือนเห็นสายรุ้งขึ้นกลางแจ้ง','โอ้ความรักไปโกรธอะไรฉันมา ทำไมไม่เคยมาหาให้ฉันได้กอดไว้','เธอคงยังไม่รู้ ว่ามีหนึ่งคนแอบรักเธอ แอบดูแลแต่เธอทำอะไรเพื่อเธอเหมือนไม่ตั้งใจ','จะมีเพียงเธอรักเพียงแต่เธอ โอบกอดเธอด้วยรัก รักที่ห่วงใย',
    'จะเลิกเอาใจไปรัก คนที่ไม่รักเรา จะเลิกเอาใจไปทิ้งให้เจ็บให้ปวดร้าว','ผมอยู่คนเดียวมาก็นานหลายปี แต่ถ้ามีคุณมาอยู่ด้วยกันก็ดี','ฉันรู้ว่าเธอจะยิ้มแบบไหน ตอนคนที่เธอรักเซอร์ไพรส์ ฉันยังอาวรณ์อยู่ Baby I want you'];
    const musicpic =['/images/musicpok1.jpg','/images/musicpok2.jpg','/images/musicpok3.jpg','/images/musicpok4.jpg','/images/musicpok5.jpg','/images/musicpok6.jpg','/images/musicpok7.jpg',
    '/images/musicpok8.jpg','/images/musicpok9.jpg','/images/musicpok10.jpg','/images/musicpok11.jpg','/images/musicpok12.jpg','/images/musicpok13.jpg','/images/musicpok14.jpg',
    '/images/musicpok15.jpg','/images/musicpok16.jpg','/images/musicpok17.jpg','/images/musicpok18.jpg','/images/musicpok19.jpg','/images/musicpok20.jpg','/images/musicpok21.jpg',
    '/images/musicpok22.jpg','/images/musicpok23.jpg','/images/musicpok24.jpg','/images/musicpok25.jpg','/images/musicpok26.jpg','/images/musicpok27.jpg','/images/musicpok28.jpg',
    '/images/musicpok29.jpg','/images/musicpok30.jpg','/images/musicpok31.jpg','/images/musicpok32.jpg','/images/musicpok33.jpg','/images/musicpok34.jpg','/images/musicpok35.jpg',
    '/images/musicpok36.jpg','/images/musicpok37.jpg','/images/musicpok38.jpg','/images/musicpok39.jpg']
    let index = Math.floor(Math.random() * musiclist.length);
    var musicname = musiclist[index];
    var musicpokp = musicpic[index];
    this.setState({
      name: musicname,
      mpic: <img width="100%" src={musicpokp}/>
    })
  }

  
  render() {
    return (
      <section>
        <div class="content">
          <div class="container">
          <header className="app-header">
          <img className="header-logo" src="/images/mylogo2.png" width="100%"></img>
          </header>
            <div class="header-topic">
                <p>Song for you </p>
            </div>
            
            <container id="text">
              <div class="box-ran">
                  <p>
                  <button id="random" class="myButton"
                  type="button"
                  onClick={this.changesong}
                  >Random</button><br></br><br></br> 
                  {this.state.name} <br></br>
                  </p>
              </div>
            </container>
            <div class="head-line">
                <img src="/images/line.png" width="100%" />
            </div>
            <div class="pic">{this.state.mpic} </div> 
            </div>
            <Modal/>
          </div>
      </section>
      
    );
  }
  
}

export default App;