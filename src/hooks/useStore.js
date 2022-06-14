import create from 'zustand';

const useStore = create(set => {
	return {
		isActive: false,
		toggleDetails: () => {
			set(state => {
				return {isActive: !state.isActive};
			});
		},
	};
});

export default useStore;
