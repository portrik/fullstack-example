import { render } from '@testing-library/react';

import { Admin } from '@pages';

describe('@pages/Admin', () => {
	test('Should Render as Expected', () => {
		const { baseElement } = render(<Admin />);

		expect(baseElement).toMatchSnapshot();
	});
});
