import React from 'react';
import MainLayout from 'components/Layout/MainLayout';

const FundraisingPage = () => {
  return (
    <MainLayout
      title="ECRT Support First Responders"
      description="ECRT is raising funds to support three initiatives to combat COVID-19 in Ethiopia. One, repairing existing medical devices in partnership with Tegbareid Polytechnic Technical College; two, purchasing essential medical supplies for local hospitals such as St. Peter's Specialized Hospital & Eka Kotebe General Hospital, and three, supporting Ethiopian manufacturing of face masks for the public, and personal protective equipment [PPE] for medical professionals. 
    Habesha Networks serves as our fiscal sponsor and we are aligned in supporting first responders and healthcare professionals as they continue to meet the critical needs of this pandemic."
    >
      <div style={{ padding: '42px 0' }}>
        <div style={{ 'text-align': 'center' }}>
          <h2 className="font-weight-600">Partnership Note</h2>

          <h4 className="text-black-50">
            Habesha Networks (HN) and Ethiopia COVID-19 Response Team (ECRT)
          </h4>
        </div>

        <hr />
        <h5 className="font-weight-600">I- Introduction</h5>
        <p>
          HN is a grassroots non-profit organization in multiple cities around
          the world committed to developing and implementing methods of
          connectivity and support between Habesha communities across the globe.
          With an emphasis on community development, philanthropy, thought
          leadership, and social and professional networking, our goal is to
          provide members resources while bridging the gaps and growing a
          stronger Habesha Network.
        </p>
        <p>
          ECRT is a global volunteer team of engineers, doctors, designers,
          marketers, architects, product managers, and other industry
          professionals to respond to COVID-19 in Ethiopia. ECRT is a movement,
          #EneLegna #እኔለኛ (Me for Us) which is guided by the principle that the
          actions we take as individuals today will make a difference for our
          global community tomorrow. We work together in the spirit of Ubuntu --
          the universal principle of “I am because we are’”. The COVID-19 crisis
          highlights just how interconnected we all are. We have come together
          to work collectively, and across borders to create and share open
          source tools and valuable information.
        </p>
        <hr />
        <h5 className="font-weight-600">
          II- Rationale for ECRT collaboration with HN
        </h5>
        <p>
          ECRT sees an opportunity for collaboration between HN and ECRT that
          will amplify ECRT’s efforts. Given the urgency that COVID-19 demands,
          ECRT has deliberately chosen to focus its time and energy on volunteer
          work and not to include fund management in its activities. Instead, it
          prefers to establish a partnership with an existing nonprofit, such as
          HN. Through its work streams, ECRT has identified priority needs at
          different levels of government and society and aims to connect work on
          the ground with existing donors.{' '}
        </p>
        <hr />
        <h5 className="font-weight-600">
          III- HN and ECRT Scope of Partnership:
        </h5>
        <p>
          ECRT shall promote the HN Emergency COVID-19 activities and milestones
          through its various networks.
        </p>
        <p>
          ECRT will make its volunteers and networks available to meet EDTF’s
          technical, communications, and operational needs.{' '}
        </p>
        <p>
          HN will establish a dedicated sub-account under the HN COVID-19 window
          to receive funds arising from ECRT’s fundraising efforts including,
          but not limited to, ECRT’s Support Service Delivery and Personal
          Protective Equipment (PPE) fundraising activities.
        </p>
        <p>
          ECRT or its donors will deposit donations from institutional funding
          sources and individuals into the ECRT sub-account through on-line
          payments, wire transfers or other methods as agreed between HN and
          ECRT.
        </p>
        <p>
          HN will disburse amounts from the dedicated ECRT sub-account to
          accounts designated by ECRT in accordance with the disbursement
          guidelines set forth in the attached Exhibit A.
        </p>
        <p>
          HN will disburse amounts from the dedicated ECRT sub-account to
          accounts designated by ECRT in accordance with the disbursement
          guidelines set forth in the attached Exhibit A.
        </p>
        <p>
          ECRT will pay HN an amount equal to $10,000 to cover the estimated
          costs of HN hosting ECRT’s dedicated sub-account and administering and
          disbursing its donations.
        </p>
        <p>
          ECRT and HN will review on a six-monthly basis the actual costs based
          on experiences gained; provided that, the fees associated with
          administering the ECRT sub-account shall not exceed $15,000, unless
          agreed upon by both parties.
        </p>
        <p>
          No party hereto commits to raising any minimum amount of funds through
          any campaign.
        </p>

        <hr />
        <h5 className="font-weight-600">IV-ECRT Strategic Pillars</h5>
        <p>
          As ECRT mobilizes funds, it will allocate them towards the priorities
          listed in the following five Strategic Pillars:
        </p>
        <ol type="1">
          <li>
            Enabling compliance with public health guidelines
            <ol type="a">
              <li>Awareness</li>
              <li>Handwashing and hand sanitizers</li>
              <li>Face masks for every person</li>
              <li>Care package delivery for vulnerable </li>
            </ol>
          </li>
          <li>
            Supporting health/frontline workers with resources to ensure they
            have access to:
            <ol type="a">
              <li>Personal protective equipment (PPE)</li>
              <li>Medical equipment</li>
              <li>Emotional support services</li>
              <li>Adequate housing and transportation</li>
            </ol>
          </li>
          <li>
            Facilitating knowledge exchange between regions and countries
            <ol type="a">
              <li>
                Developing COVID-19 awareness content to inform citizens in
                local languages
              </li>
              <li>Encouraging the sharing of ideas through Civic Engagement</li>
              <li>Free and open-source resources</li>
            </ol>
          </li>
          <li>
            Forming mission-aligned partnerships for amplified impact
            <ol type="a">
              <li>Nonprofits and volunteer organizations</li>
              <li>Product and service providers</li>
              <li>Professional associations</li>
              <li>
                Governmental agencies that align with public health and
                community response
              </li>
              <li>
                Using our platform to help existing efforts gain visibility and
                resources (mutual aid)
              </li>
            </ol>
          </li>
          <li>
            {' '}
            Contribute meaningfully to ongoing response efforts to digitize
            Africa/ digitizing response efforts
            <ol type="a">
              <li>
                Develop digital tools that optimize public health response
                efforts
              </li>
              <li>
                Identify gaps in response efforts that can be met with
                technology
              </li>
              <li>
                Inspire data-driven, evidence-based decision making and policy
                change
              </li>
              <li>
                Drive adoption of technical tools by health sectors across the
                continent
              </li>
            </ol>
          </li>
        </ol>

        <h5 className="font-weight-600">
          V- Duration of the HN Emergency COVID-19
        </h5>
        <p>
          The HN-ECRT Partnership subaccount will be open for the duration of
          the time that COVID-19 ceases to be an existential threat to the
          Ethiopian people.
        </p>
      </div>
    </MainLayout>
  );
};

export default FundraisingPage;
