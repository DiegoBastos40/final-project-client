import "./CoverSecond.css";
import { IoIosFitness } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { GiDonut } from "react-icons/gi";
import styled from "styled-components";


const IconTag = styled.section`
  .my-react-icons {
    height: 70px;
    width: 70px;
  }
`;

function CoverSecond() {
  return (
      <div className="section-all">
      <IconTag className="section-2">
      <div className="square">
        <IoIosFitness className="my-react-icons" />
        <h2>PT Form</h2>
        <p>
          Submit a request direfctly to your Personal Trainner and get a personalized plan
        </p>
      </div>

      <div className="square">
        <BiFoodMenu className="my-react-icons" />
        <h2>Find Healthy Recipes</h2>
        <p>
          Amazing recepis directly from our new and updated API that will help you changing your boring meals !
        </p>
      </div>

      <div className="square">
        <GiDonut className="my-react-icons" />
        <h2>Want to know if you could eat that Donut ?</h2>
        <p>Search here the nutrition value of any food and find out the damage that it would make to your daily meal plan</p>
      </div>
    </IconTag>
      </div>
  );
}

export default CoverSecond;