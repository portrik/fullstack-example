import { render } from '@testing-library/react';

import { Login } from '@pages';

describe('@pages/Login', () => {
	test('Should Render as Expected', () => {
		const { baseElement } = render(<Login />);

		expect(baseElement).toMatchSnapshot();
	});
});
