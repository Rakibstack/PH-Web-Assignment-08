import React from 'react';
import { useNavigation } from 'react-router-dom';

const PageLoader = () => {
     const navigation = useNavigation();

    return (
         navigation.state === 'loading' && (
      <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm z-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
    );
};

export default PageLoader;