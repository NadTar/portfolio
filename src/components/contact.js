import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:'white'}}>
                Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a>
                </h4>
                <h4>Email: nadirkt@uw.edu</h4>
                <h4>Phone: 206-458-0748</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
