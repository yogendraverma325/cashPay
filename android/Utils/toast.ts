import Toast from 'react-native-root-toast';
const displayMessgae = (values: {message: string; type: string}) => {
  let backgroundColor = '#e67e22';
  switch (values.type) {
    case 'ERROR':
      backgroundColor = '#e74c3c';
      break;

    case 'SUCCESS':
      backgroundColor = '#2ecc71';
      break;
  }
  Toast.show(values.message, {
    duration: Toast.durations.LONG,
    backgroundColor: '#50504e', // Customize background color
    textColor: '#fff', // Customize text color
    textStyle: {
      fontSize: 18,
      fontWeight: '600',
    },
    shadow: true,
    animation: true,
    position: Toast.positions.BOTTOM,
    hideOnPress: true,
  });
};
export {displayMessgae};
