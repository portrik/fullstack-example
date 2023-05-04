import { render } from '@testing-library/react';

import { Article } from '@pages';

describe('@pages/Article', () => {
	test('Should Render as Expected', () => {
		const { baseElement } = render(<Article />);

		expect(baseElement).toMatchSnapshot();
	});
});
