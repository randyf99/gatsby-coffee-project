import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title='our story' />
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center'>
            <p className='lead text-muted mb-5'>
              Lorem ipsum web Design slosh ball port boat east martillo dive
              tank island snorkel mel fisher golf sunset celebration web
              development rest beach simonton eagle eco-tourism Fort Zachary key
              lime custom house cuban conch fritters conch republic sailing
              lesbian shipwreck boca grand Sloppy Joe's dredgers key conch
              southernmost city sunset key cayo hueso Henry Flagler sun Matthew
              C. Perry cleat navy buoy lighthouse Captain Tony christmas tree
              island Truman Annex mangroves Key West ipsum western union
              schooner Laid Back Key West Key West starboard reef.
            </p>
            <Link to='/about/'>
              <button className='btn text-uppercase btn-yellow'>
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
