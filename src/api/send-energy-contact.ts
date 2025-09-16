// API endpoint simulation for energy contact form
// In a real application, this would be handled by a backend service

export interface EnergyContactData {
  name: string;
  email: string;
  phone: string;
  currentBill: string;
  message: string;
  estimatedSavings: number | null;
  to: string;
}

export const sendEnergyContact = async (data: EnergyContactData): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real implementation, this would:
  // 1. Validate the data
  // 2. Send an email to info@aristamovil.com
  // 3. Store the contact request in a database
  // 4. Send a confirmation email to the user
  
  console.log('Energy contact form submitted:', {
    ...data,
    timestamp: new Date().toISOString()
  });
  
  // Simulate successful submission
  return {
    success: true,
    message: 'Solicitud de información sobre energía enviada correctamente'
  };
};

// Mock API endpoint for development
if (typeof window !== 'undefined') {
  // Override fetch for the energy contact endpoint
  const originalFetch = window.fetch;
  window.fetch = async (url: string | URL | Request, options?: RequestInit) => {
    if (typeof url === 'string' && url.includes('/api/send-energy-contact')) {
      try {
        const body = options?.body ? JSON.parse(options.body as string) : {};
        const result = await sendEnergyContact(body);
        
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'Error processing request' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }
    
    return originalFetch(url, options);
  };
}