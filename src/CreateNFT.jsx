import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "./ui/use-toast";

const CreateNFT = ({ addFeaturedNFT }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerAvatar, setSellerAvatar] = useState('');
  const [itemsCount, setItemsCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNFT = {
      name,
      description,
      imageUrl,
      sellerName,
      sellerAvatar,
      itemsCount
    };
    addFeaturedNFT(newNFT);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create New NFT</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <Input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="NFT Name" 
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <Input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Description" 
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <Input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            placeholder="Image URL" 
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Seller Name</label>
          <Input 
            type="text" 
            value={sellerName} 
            onChange={(e) => setSellerName(e.target.value)} 
            placeholder="Seller Name" 
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Seller Avatar URL</label>
          <Input 
            type="text" 
            value={sellerAvatar} 
            onChange={(e) => setSellerAvatar(e.target.value)} 
            placeholder="Seller Avatar URL" 
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Items Count</label>
          <Input 
            type="text" 
            value={itemsCount} 
            onChange={(e) => setItemsCount(e.target.value)} 
            placeholder="Items Count" 
            className="w-full"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Create NFT</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNFT;