import React from 'react';
import bgImage from '../hotel-safe.png';

import LockKeyBoard from '../containers/LockKeyBoard';
import LockDisplay from '../containers/LockDisplay';
import LockIndicator from '../containers/LockIndicator';

const App = () => (
	<div className="lock">
		<section className="lock-left">
			<LockKeyBoard />
		</section>
		<section className="lock-right">
			<LockDisplay />
			<LockIndicator />
		</section>
	</div>
);

export default App;