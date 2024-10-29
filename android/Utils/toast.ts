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
    position: Toast.positions.CENTER,
    backgroundColor: backgroundColor, // Customize background color
    textColor: 'white', // Customize text color
    shadow: true,
    animation: true,
  });
};
export {displayMessgae};
