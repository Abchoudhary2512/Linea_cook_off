import React, { useState, useEffect } from 'react';
import { useAddress } from '@thirdweb-dev/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import MyContractABI from './assets/abi.json';
import { ethers } from 'ethers';

const CreateNFT = ({ contractAddress, onBackClick, onAddNFT }) => {
  const address = useAddress();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [methods, setMethods] = useState([]);

  // Initialize provider and contract
  const provider = new ethers.providers.JsonRpcProvider('https://rpc.sepolia.linea.build');
  const contract = new ethers.Contract(contractAddress, MyContractABI, provider.getSigner());

  useEffect(() => {
    // List available methods from the contract
    const fetchMethods = async () => {
      const contractInterface = new ethers.utils.Interface(MyContractABI);
      const methodNames = Object.keys(contractInterface.functions);
      setMethods(methodNames);
    };

    fetchMethods();
  }, [contract]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      console.log('Please connect your wallet');
      return;
    }

    const metadata = {
      name,
      description,
      image: imageUrl,
    };

    setLoading(true);
    setError('');

    try {
      // Call the appropriate contract method
      if (methods.includes('createNFT')) {
        const tx = await contract.createNFT(metadata);
        const receipt = await tx.wait(); // Wait for transaction to be mined
        console.log(receipt);
        
        // Add the newly created NFT to the list
        onAddNFT({
          name,
          description,
          imageUrl,
          sellerName: 'You',
          sellerAvatar: '',
          itemsCount: '1 item'
        });

        // Redirect to the main page after successful minting
        onBackClick();
      } else {
        throw new Error('Method createNFT not found in the contract ABI');
      }
    } catch (error) {
      console.error('Failed to mint NFT', error);
      setError('Failed to mint NFT. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-4 md:px-6 py-12">
      <Button variant="link" onClick={onBackClick} className="flex items-center">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back
      </Button>
      <h2 className="text-2xl font-bold mb-6">Create New NFT</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              NFT Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <Input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="mt-6">
            <Button type="submit" disabled={loading}>
              {loading ? 'Minting...' : 'Mint NFT'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNFT;
