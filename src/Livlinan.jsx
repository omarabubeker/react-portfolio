import React from "react";
import styled from "styled-components";
import Laptopimg from "../src/assets/Laptop.png";
import Moodboard from "../src/assets/Moodboard.png";
import Lofi from "../src/assets/Lofi.png";
import Hifi from "../src/assets/Hifi.png";
import Logo from "../src/assets/Logo.png";
import Deploy from "../src/assets/Deploy.png";
import {SecondButton} from '../src/components/Main'

const Container = styled.div`
  width: 100vw;
  background-color: #0d0d0d;
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Styledh1 = styled.h1`
  color: #eeeeee;
  margin: 1em;
  text-shadow: 1px 1px 10px #aaaaaa;
  font-weight: 600;
  font-size: 3em;
  text-align: center;
`;

const StyledP = styled.p`
  color: #eeeeee;
  width: 27em;
  font-weight: 400;
  max-width: 90vw;
`;

const SecondP = styled.p`
  color: #eeeeee;
  font-weight: 400;
  width: 5em;
  text-align: center;
`;

const ThirdP = styled.p`
  color: #eeeeee;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    min-width: 70vw;
  }
`;

const ItalicP = styled(ThirdP)`
  font-style: italic;
  font-weight: 200;
  text-align: center;
  max-width: 50vw;
  margin-bottom: 1em;
`;

const StyledTop = styled(StyledP)`
  text-align: center;
`;

const Styledimg = styled.img`
  width: 70%;
  margin: 3em;
`;

const HalfImg = styled.img`
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-top: 1px solid #919191;
  min-height: 70vh;
`;



const StyledSmall = styled.div`
  margin: 0 4em;
`;

const SecondSmall = styled(StyledSmall)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3em;

  @media screen and (max-width: 900px) {
    margin: 0 1em;
  }

  @media screen and (max-width: 750px) {
    margin: 0 0.5em;
  }
`;

const StyledButtons = styled.button`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  border: 2px solid #eeeeee;
  background-color: #0d0d0d;
  color: #eeeeee;
  font-weight: 800;
  transition: all 500ms ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #eeeeee;
    color: #0d0d0d;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
  li {
    color: #eeeeee;
  }
`;

const Styledh2 = styled.h2`
  color: #eeeeee;
  margin-top: 4em;
`;

const Secondh2 = styled(Styledh2)`
  margin-top: 0;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5em;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NewFlex = styled(StyledFlex)`

@media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    width: 80vw;
    padding: 0;
  }
`;


const ProcessFlex = styled(StyledFlex)`
margin: 3em 0;
flex-direction: row;

@media screen and (max-width: 600px) {
    display: none;
  }

`

const Halfblock = styled.div`
  width: 50%;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextImage = styled.div`
width: 100%;
`

const Livlinan = () => {
  return (
    <Container>
      <StyledDiv>
        <Styledh1>Livlinan Familjehem</Styledh1>
        <StyledTop>
          The development of a website with the main purpose of facilitating
          communication between social services and foster families.
        </StyledTop>
        <Styledimg src={Laptopimg} alt="laptop" />
      </StyledDiv>
      <StyledDiv>
        <div>
          <Styledh2>Background:</Styledh2>
          <StyledP>
            My classmate and I took on a real client project alongside our
            school studies to gain practical experience. Livlinan familjehem
            approached us through my classmate Maher, and we saw this as an
            opportunity to apply our knowledge in a professional setting. The
            project involves designing and developing a website and logo for
            Livlinan familjehem. We faced a big challenge in catering to two
            distinct target groups with different needs: Socialtjänsten (Social
            Services) and families. Balancing their expectations has been a
            central challenge, but we have been holding weekly meetings with
            Livlinan Familjehem to ensure progress.
          </StyledP>
          <Styledh2>Roles:</Styledh2>
          <StyledP>
            As the sole participants in the project, my classmate and I had
            equal involvement and collaborated closely. We shared
            responsibilities, exchanged ideas, and made joint decisions,
            leveraging our strengths for a well-rounded execution. This
            collaborative approach provided us with a comprehensive project
            understanding and valuable experience in various areas.
          </StyledP>
        </div>
        <StyledFlex>
          <StyledSmall>
            <Styledh2>Contribution</Styledh2>
            <StyledUl>
              <li>UX/UI-Design</li>
              <li>Logo Design</li>
              <li>Web development</li>
            </StyledUl>
          </StyledSmall>
          <StyledSmall>
            <Styledh2>Tools</Styledh2>
            <StyledUl>
              <li>Figma</li>
              <li>Wordpress</li>
            </StyledUl>
          </StyledSmall>
          <StyledSmall>
            <Styledh2>Team</Styledh2>
            <StyledUl>
              <li>Omar Abubeker</li>
              <li>Maher Hezam</li>
            </StyledUl>
          </StyledSmall>
        </StyledFlex>
      </StyledDiv>
      <StyledDiv>
        <Styledh1>Process</Styledh1>
      <ProcessFlex>
          <SecondSmall>
            <StyledButtons>1</StyledButtons>
            <SecondP>Business Analysis</SecondP>
          </SecondSmall>
          <SecondSmall>
            <StyledButtons>2</StyledButtons>
            <SecondP>Lofi Wireframes</SecondP>
          </SecondSmall>
          <SecondSmall>
            <StyledButtons>3</StyledButtons>
            <SecondP>Hifi</SecondP>
          </SecondSmall>
          <SecondSmall>
            <StyledButtons>4</StyledButtons>
            <SecondP>Logo</SecondP>
          </SecondSmall>
          <SecondSmall>
            <StyledButtons>5</StyledButtons>
            <SecondP>Build & Deploy</SecondP>
          </SecondSmall>
        </ProcessFlex>
        <StyledFlex>
          <Halfblock>
            <div>
              <Secondh2>Business Anlysis:</Secondh2>
              <ThirdP>
                We had the opportunity to meet with the team from Livlinan
                Familjehem and were provided with their business description as
                well as information about their competitors. We were tasked with
                conducting a competitive analysis to evaluate other services in
                the same market, which we used to inform our UX design
                decisions. Together with the client, we also created moodboards
                that laid the foundation for the tone and aesthetics of the
                website.
              </ThirdP>
            </div>
          </Halfblock>
          <Halfblock>
            <div>
              <HalfImg src={Moodboard} alt="moodboard" />
              <ItalicP>A moodboard we created for the client.</ItalicP>
            </div>
          </Halfblock>
        </StyledFlex>
        <NewFlex>
          <Halfblock>
            <div>
              <HalfImg src={Lofi} alt="moodboard" />
              <ItalicP>The initial sketches of the page structure.</ItalicP>
            </div>
          </Halfblock>
          <Halfblock>
            <div>
              <Secondh2>Lofi Wireframes:</Secondh2>
              <ThirdP>
                We developed low-fidelity sketches of the website using Figma
                after thorough research and inputs. By presenting the sketches
                to the clients and gathering feedback, we were able to tailor
                the design to their vision and goals. Figma facilitated
                collaboration and quick real-time changes. The client's feedback
                was used to improve the design and move towards a user-friendly
                solution. We aimed for an efficient and user-centered website
                through collaboration with the client. After several iterations,
                the sketches were ready to be developed into high-fidelity
                designs.
              </ThirdP>
            </div>
          </Halfblock>
        </NewFlex>
        <StyledFlex>
          <Halfblock>
            <div>
              <Secondh2>Hifi:</Secondh2>
              <ThirdP>
                Based on the feedback we received, we initiated the construction
                of the high-fidelity prototype. By maintaining regular weekly
                meetings with the Livlinan Familjehem team, we created a
                platform for exchanging ideas and engaging in constructive
                collaboration. These meetings served as a crucial arena for
                discussing and exploring various concepts and design
                alternatives. By actively engaging in dialogue with the client
                and their team, we ensured that the prototype met their specific
                requirements and expectations.
              </ThirdP>
            </div>
          </Halfblock>
          <Halfblock>
            <div>
              <HalfImg src={Hifi} alt="moodboard" />
              <ItalicP>A more detailed image of the final product.</ItalicP>
            </div>
          </Halfblock>
        </StyledFlex>
        <NewFlex>
          <Halfblock>
            <div>
              <HalfImg src={Logo} alt="moodboard" />
              <ItalicP>
                The hands represent warmth and care, while the house represents
                security.
              </ItalicP>
            </div>
          </Halfblock>
          <Halfblock>
            <div>
              <Secondh2>Logo:</Secondh2>
              <ThirdP>
                To develop the logo, we first went back to Livlinan's identity
                and core values. We determined that the logo needed to show
                warmth, security, and care. With this in mind, we began
                sketching and maintained rapid feedback loops with the client to
                facilitate their involvement in the selection process. We
                emphasized the importance of creating a simple design that would
                be effective across various sizes and platforms.
              </ThirdP>
            </div>
          </Halfblock>
        </NewFlex>
        <StyledFlex>
          <Halfblock>
            <div>
              <Secondh2>Build & Deploy:</Secondh2>
              <ThirdP>
                Once the logo and prototype were finalized, it was time to
                proceed with the actual website development. Considering the
                scale of the project, we determined that building it on
                WordPress would be the most suitable choice. At this stage, we
                are in the process of finalizing the remaining components and
                working on the last details. Once we complete this part, our
                plan is to conduct tests before concluding the project.
              </ThirdP>
            </div>
          </Halfblock>
          <Halfblock>
            {" "}
            <div>
              <HalfImg src={Deploy} alt="moodboard" />
              <ItalicP>
                An image showing the website in both mobile and desktop view. .
              </ItalicP>
            </div>
          </Halfblock>
        </StyledFlex>
      </StyledDiv>
      <StyledDiv>
        <Styledh2>See the website!</Styledh2>
        <ItalicP>
          It is important to note that the website is not yet fully completed.
          We are currently working on the final details. We expect to finish it
          in the near future
        </ItalicP>
        <SecondButton>Go to page!</SecondButton>
      </StyledDiv>
    </Container>
  );
};

export default Livlinan;
