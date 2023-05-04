import { render } from '@testing-library/react';

import { Edit } from '@pages';

describe('@pages/Edit', () => {
	test('Should Render as Expected', () => {
		const { baseElement } = render(<Edit />);

		expect(baseElement).toMatchSnapshot();
	});
});
