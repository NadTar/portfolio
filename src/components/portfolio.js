import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state = {
    modal: {}
  }

  closeModal = () => {
    this.setState({ modal: {} })
  }

  render() {
    const { modal } = this.state
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <h2 style={{ marginBottom: "15px" }}>Web Development</h2>
            {
              resumeData.portfolioweb && resumeData.portfolioweb.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <h2 style={{ marginBottom: "15px" }}>UX Design</h2>
            {
              resumeData.portfolioux && resumeData.portfolioux.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <h2 style={{ marginBottom: "15px" }}>Research And Writing</h2>
            {
              resumeData.portfoliowriting && resumeData.portfoliowriting.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <Modal
        visible={modal && modal.name}
        width="800"
        height="600"
        effect="fadeInUp"
        onClickAway={() => this.closeModal()}
      >
        <div className="portfolio-modal">
          <div>
            <h1>{modal.title}</h1>
            <div style={{ display: 'flex', justifyContent: "center" }}><img src={`${modal.imgurl}`} className="item-img" alt="img" style={{ height: "400px" }} /></div>
            <p style={{ padding: "5px" }}>{modal.fullDescription}</p>
            <div className="links">
              {modal.githubLink && <a style={{ padding: "5px"}} href={modal.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>&nbsp;
                Github Repository
            </a>}
              {modal.webLink && <a style={{ padding: "5px"}} href={modal.webLink} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-globe"></i>&nbsp;
                Visit
            </a>}
            </div>
          </div>
          <button style={{ position: 'absolute', top: '0', left: '97.6%', paddingTop: '0', paddingBottom: '0', paddingLeft: '5px', paddingRight: '5px' }} onClick={() => this.closeModal()}>x</button>
        </div>
      </Modal>

    </section>);
  }
}

