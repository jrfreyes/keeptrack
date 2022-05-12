import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import React from 'react'
import { Project } from "../Project"
import ProjectCard from "../ProjectCard"
import userEvent from '@testing-library/user-event';
import TestRenderer from "react-test-renderer";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe("<ProjectCard />", () => {
    let project;
    let handleEdit;

    const setup = () => render((
        <MemoryRouter>
            <ProjectCard project={project} onEdit={handleEdit} />
        </MemoryRouter>
    ), {
        legacyRoot: true
    });

    beforeEach(() => {
        project = new Project({
            id: 1,
            name: "Mission Impossible",
            description: "This is really difficult",
            budget: 100,
            // imageUrl: "assets/placeimg_500_300_arch1.png"
        });
        handleEdit = jest.fn();
    });
    
    


    it("should initially render", () => {
        setup();
    });

    it('renders project properly', () => {
        setup();
        expect(screen.getByRole('heading')).toHaveTextContent(project.name);
        // screen.debug(document);
        screen.getByText(/This is really difficult\.\.\./i);
        screen.getByText(/Budget : 100/i);
    });

    it("handler called when edit clicked", async () => {
        setup();
        const user = userEvent.setup();
        await user.click(screen.getByRole('button', { name: /edit/i }));
        expect(handleEdit).toBeCalledTimes(1);
        expect(handleEdit).toBeCalledWith(project);
    });

    test("snapshot", () => {
        
        const tree = TestRenderer
            .create((
                <MemoryRouter>
                    <ProjectCard project={project} onEdit={handleEdit} />
                </MemoryRouter>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
});