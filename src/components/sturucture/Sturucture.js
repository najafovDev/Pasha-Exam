import React from 'react';
import './structure.scss';


const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);

    return (
      <div className="accordion-wrapper">
        <div
          className={`accordion-title ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
          >
          {title}
        </div>
        <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
          <div className="accordion-content">{children}</div>
        </div>
      </div>
    );
  };


const Structure = () => {
    return (
         <div className="structure">
             <h2>Struktur</h2>

             <div className="structure-wrapper">
                
                <Accordion title={
                    ["Sturuktur 2",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title={
                    ["Sturuktur 3",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title={
                    ["Sturuktur 4",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title={
                    ["Sturuktur 5",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 6",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 7",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 8",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 9",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 10",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>


                <Accordion title={
                    ["Sturuktur 11",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>

                <Accordion title={
                    ["Sturuktur 12",
                     <span className='tag tag-fiolet'>2222</span>, 
                     <span className='tag tag-blue'>2222</span>, 
                     <span className='tag tag-green'>2222</span>,  
                     <span className='tag tag-yellow'>2222</span>]}>
                    <ul>
                        <li>Hüquq <span className="tag tag-yellow tag-no-bg">2222</span>
                                  <span className="tag tag-green tag-no-bg">2222</span>
                        </li>
                        <li>Marketinq</li>
                        <li>
                            <Accordion title={
                                ["İnvestisiya",
                                <span className="tag tag-yellow tag-no-bg">2222</span>, 
                                <span className="tag tag-green tag-no-bg">2222</span>
                                ]
                                }>
                                 <ul className="child-items">
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                     <li>- Strateji</li>
                                 </ul>
                            </Accordion>
                        </li>
                    </ul>
                </Accordion>
            </div>
         </div>
    );
};


export default Structure;