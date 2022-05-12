import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import React from 'react'
import { MemoryRouter } from "react-router-dom"
import ProjectsPage from '../ProjectsPage'
import { Provider } from "react-redux"
import { store } from '../../state'
import { rest } from 'msw'
import {setupServer} from 'msw/node'
import {url as projectsUrl} from '../projectAPI'
import { MOCK_PROJECTS } from '../MockProjects'

const server = setupServer(
    rest.get(projectsUrl, (req, res, ctx) => {
        return res(ctx.json(MOCK_PROJECTS));
    })
)

describe("<ProjectList />", () => {
    function renderComponent() {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ProjectsPage />
                </MemoryRouter>
            </Provider>
        );
    }

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test("should render without crashing", () => {
        renderComponent();
        expect(screen).toBeDefined();
    });

    test('should display loading', () => {
        renderComponent();
        expect(screen.getByText(/loading/i))
            .toBeInTheDocument();
    });

    test('should display projects', async () => {
        renderComponent();
        expect(await screen.findAllByRole('img')).toHaveLength(
            MOCK_PROJECTS.length
        );
    });

    test('should display more button', async () => {
        renderComponent();
        expect(
            await screen.findByRole('button', { name: /more/i})
        ).toBeInTheDocument();
    });

    test('should display more button with get', async () => {
        renderComponent();
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
        expect(screen.getByRole('button', {name: /more/i})).toBeInTheDocument();
    })

    test('should display custom error on server error', async () => {
        server.use(
            rest.get(projectsUrl, (req, res, cxt) => {
                return res(ctx.status(500, 'Server Error'));
            })
        );
        renderComponent();

        expect(
            await screen.findByText(/There was an error retrieving the project(s)./i)
        ).toBeInTheDocument();
    });
});