import React from 'react';
import bgImage from '../hotel-safe.png';

import LockKeyBoard from './LockKeyBoard';
import LockDisplay from './LockDisplay';
import LockIndicator from './LockIndicator';

const App = () => (
	<div className="lock">
		<img src={bgImage} style={{maxWidth: '100%', left: '50%', transform: 'translateX(-50%)', top:'500px', position: 'absolute'}} />
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