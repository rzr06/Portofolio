import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Status"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./umrah.png"
								alt="umrahk"
								className="work-image"
							/>
							<div className="work-title">Universitas Maritim Raja Ali Haji</div>
							<div className="work-subtitle">
								Student - Informatics Enginering
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
