import { render } from '@testing-library/react';

import { List } from '@pages';

describe('@pages/List', () => {
	test('Should Render as Expected', () => {
		const { baseElement } = render(<List />);

		expect(baseElement).toMatchSnapshot();
	});
});
